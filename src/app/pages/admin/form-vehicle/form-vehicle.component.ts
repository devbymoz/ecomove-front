import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../../services/vehicle.service.js';
import { CreateVehicle } from '../../../models/vehicles/create-vehicle.interface.js';
import { BrandService } from '../../../services/brand/brand.service.js';
import { Brands } from '../../../models/brands/brands.interface.js';
import { Category } from '../../../models/categories/category.interface.js';
import { CategoryService } from '../../../services/category/category.service.js';
import { MotorizationService } from '../../../services/motorization/motorization.service.js';
import { Motorization } from '../../../models/motorizations/motorization.interface.js';

@Component({
  selector: 'app-form-vehicle',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.css']
})
export class FormVehicleComponent implements OnInit{
  title: string = '';
  description: string = '';
  showStatusOptions: boolean = false;
  isSubmitted = false;
  private _serviceVehicle = inject(VehicleService);
  private _formBuilder = inject(FormBuilder);
  private _brandService = inject(BrandService);
  brands: Brands[] = [];
  private _categoryService = inject(CategoryService);
  categories: Category[] = []
  carSeatNumbers: number[] = [2, 3, 4, 5, 6, 7, 8]
  private _motorizationService = inject(MotorizationService);
  motorizations: Motorization[] = [];

  // Validation des champs du formulaires
  createVehicleForm = this._formBuilder.group({
    registration: ['', [Validators.maxLength(10), Validators.minLength(5)]],
    brand: ['',],
    model: ['',],
    category: ['',],
    photo: ['',],
    carSeatNumber: ['',],
    motorization: ['',],
    cO2emission: ['',],
    consumption: ['',]
  });

  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.url.subscribe(url => {
    //   if (url.some(segment => segment.path === 'modifier-vehicule')) {
    //     this.editMode();
    //   } else {
    //     this.addMode();
    //   }
    // });
  }

  ngOnInit(): void {
    this._brandService.fetBrands().subscribe({
      next: (response) => {
        this.brands = response.data;
      }
    });

    this._categoryService.fetCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      }
    });

    this._motorizationService.fetMotorizations().subscribe({
      next: (response) => {
        this.motorizations = response.data;
      }
    });


  }


  onSubmit() {
    this.isSubmitted = true;

    if (this.createVehicleForm.valid) {
      const newVehicle: CreateVehicle = {
        carSeatNumber: +this.createVehicleForm.value.carSeatNumber!,
        registration: this.createVehicleForm.value.registration!,
        photo: this.createVehicleForm.value.photo!,
        cO2emission: +this.createVehicleForm.value.cO2emission!,
        consumption: +this.createVehicleForm.value.consumption!,
        categoryId: +this.createVehicleForm.value.category!,
        motorizationId: +this.createVehicleForm.value.motorization!,
        modelId: +this.createVehicleForm.value.model!
      }    

      this._serviceVehicle.fetchCreateVehicle(newVehicle).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
          
          // this.responseValid = false;
          // setTimeout(() => {
            
          //     this.router.navigate(['page-erreur']);
            
          // }, 3000);
          console.log('Message : ', err.error.message);
          console.log('Code :', err.error.codeStatus);
        },
      });



    }



    // if (this.showStatusOptions) {
      
    // } else {
      
    // }
  }













  // immatriculation: string = '';
  // marque: string = '';
  // modele: string = '';
  // categorie: string = '';
  // lien: string = '';
  // places: string = '';
  // motorisation: string = '';
  // co2: string = '';
  // status: string = 'en service';

  // editMode() {
  //   this.title = 'Modifier un véhicule de service';
  //   this.description = '';
  //   this.showStatusOptions = true;

  //   this.immatriculation = 'AA-123-BB';
  //   this.marque = 'Peugdddeot';
  //   this.modele = '108';
  //   this.categorie = 'SUV';
  //   this.lien = 'https://image.com/308';
  //   this.places = '5';
  //   this.motorisation = 'Essence';
  //   this.co2 = '95';
  //   this.status = 'en service';
  // }

  // addMode() {
  //   this.title = 'Ajouter un nouveau véhicule de service';
  //   this.description = 'Compléter les informations suivantes pour créer un nouveau véhicule';
  //   this.showStatusOptions = false;

  //   // Réinitialiser les données pour l'ajout
  //   this.immatriculation = '';
  //   this.marque = '';
  //   this.modele = '';
  //   this.categorie = '';
  //   this.lien = '';
  //   this.places = '';
  //   this.motorisation = '';
  //   this.co2 = '';
  //   this.status = 'en service';
  // }



  onCancel() {

  }
}
