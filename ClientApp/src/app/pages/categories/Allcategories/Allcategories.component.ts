import { HttpEvent, HttpEventType } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "./../../../../../src/environments/environment.prod";
import { FileuploadService } from "../../../../../src/app/_service/fileupload.service";
import { ProductService } from "../../../../../src/app/_service/product.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Category } from "../../../../../src/app/Models/Category";
import { AlertifyService } from "../../../../../src/app/_service/alertify.service";

@Component({
  selector: "app-Allcategories",
  templateUrl: "./Allcategories.component.html",
  styleUrls: ["./Allcategories.component.scss"],
})
export class AllcategoriesComponent implements OnInit {
  form: FormGroup;
  ImagebaseUrl = environment.Imagebaseurl + "Images/CategoryImages/";
  CategoriesList: any;
  key: string = "rowid";
  reverse: boolean = false;
  p: number = 1;
  categotyid: number;
  noimage = "";
  showform: boolean = false;
  Singlecategory: Category;
  progress: number = 0;
  modalContent: string = "";
  constructor(
    private categorymodel: Category,
    private alertify: AlertifyService,
    private SpinnerService: NgxSpinnerService,
    private productservice: ProductService,
    private modalService: NgbModal,
    private uploadfileservice: FileuploadService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.SpinnerService.show();
    this.Getcategorey();
    this.form = this.fb.group({
      avatar: [null],
    });
    this.SpinnerService.hide();
  }
  showinput() {
    this.showform = true;
  }
  CategoryForm: FormGroup = new FormGroup({
    name: new FormControl(this.categorymodel.name),
    id: new FormControl(),
    status: new FormControl(true),
    image: new FormControl(null),
  });
  AddCategory() {
    
    let data= this.CategoryForm.value;
    var formData: any = new FormData();
    formData.append("Name", data.name);
    formData.append("image", data.image);
    this.productservice.Addcateogry(formData).subscribe(
      (next) => {
        this.modalService.dismissAll();
        this.CategoryForm.reset();
        this.Getcategorey();
        this.alertify.success("Category Created successfully");
      },
      (error) => {
        this.alertify.error("already exists");
        console.log(error);
      }
    );
    console.log(this.CategoryForm.value);
  }
  UpdateCategory() {
    
    let data= this.CategoryForm.value;
    var formData: any = new FormData();
    formData.append("Id",data.id);
    formData.append("Name", data.name);
    formData.append("image", data.image);
    this.productservice.UpdateCategory(formData).subscribe(
      (next) => {
        this.modalService.dismissAll();
        this.CategoryForm.reset();
        this.Getcategorey();
        this.alertify.success("Category Updated seccussfully");
      },
      (error) => {
        this.modalService.dismissAll();
        this.CategoryForm.reset();
     
        console.log(error);
      }
    );
    console.log(this.CategoryForm.value);
  }

  Getcategorey() {
    this.SpinnerService.show();
    this.productservice.GetCategorey().subscribe(
      (response: any) => {
        
        this.CategoriesList = [];
        this.CategoriesList = response;

        console.log(this.CategoriesList);
      },
      (error) => {
        console.log(error);
      }
    );
    this.SpinnerService.hide();
  }
  Sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  openLg(content, id: number) {
    this.categotyid = id;

    this.modalService.open(content, { size: "lg" });
  }
  changestatus(data:any){
 
    
    

      this.productservice.categorystatus(data).subscribe(next => {
        this.Getcategorey();
       }, error => {
         console.log(error);
       });
    
 
  }
  UpdateView(content, id: number) {
    this.modalContent = "Update";
    var data = this.CategoriesList.find((res) => res.id == id);
    
    this.Singlecategory = data;
    this.CategoryForm.patchValue({
      id: this.Singlecategory.id,
      name: this.Singlecategory.name,
      status: this.Singlecategory.status,
    });

    this.modalService.open(content, { size: "lg" });
  }
  createCategory(content) {
    this.modalContent = "Create";
    this.CategoryForm.reset();
    this.modalService.open(content, { size: "lg" });
  }
  uploadFile(event) {
    
    const file = (event.target as HTMLInputElement).files[0];
    this.CategoryForm.get("image").patchValue(file);
    this.CategoryForm.get("image").updateValueAndValidity();
  }

  SubmitImage() {
    
    if (this.form.value.avatar != null) {
      var apipath = "UploadImageCategory";

      this.uploadfileservice
        .uploadbrandimage(this.form.value.avatar, apipath, this.categotyid)
        .subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log("Request has been made!");
              break;
            case HttpEventType.ResponseHeader:
              console.log("Response header has been received!");

              this.form.reset();
              this.modalService.dismissAll();
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round((event.loaded / event.total) * 100);
              console.log(`Uploaded! ${this.progress}%`);
              break;
            case HttpEventType.Response:
              console.log("User successfully created!", event.body);
              setTimeout(() => {
                this.progress = 0;
              }, 1500);
          }
          this.Getcategorey();
        });
    }
  }
  submit() {
    let id = this.CategoryForm.get("id").value;
    if (id == null || id == "") {
      this.AddCategory();
    } else {
      this.UpdateCategory();
    }
  }
}
