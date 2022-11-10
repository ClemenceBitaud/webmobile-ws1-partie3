import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question";
import animalsQuestions from '../../../assets/animals.json';
import systemeSolaireQuestions from '../../../assets/systeme_solaire.json';
import dinosaureQuestions from '../../../assets/dinosaure.json';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  animalsQuestions!: Question[];
  systemeSolaireQuestions!: Question[];
  dinosaureQuestions!: Question[];

  isAnimalsQuestions= false;
  isSystemeSolaireQuestions = false;
  isDinosaureQuestions = false;
  afficherScore= false;

  animalForm!: FormGroup;
  dinosaureForm! : FormGroup;
  systemeSolaireForm! : FormGroup;

  score = 0;

  constructor() {
    this.animalsQuestions = animalsQuestions.questions;
    this.systemeSolaireQuestions = systemeSolaireQuestions.questions;
    this.dinosaureQuestions = dinosaureQuestions.questions;
  }

  ngOnInit(): void {
    this.animalForm = new FormGroup({
      answers: new FormArray([]),
    });

    this.dinosaureForm = new FormGroup({
      answers: new FormArray([]),
    });

    this.systemeSolaireForm = new FormGroup({
      answers: new FormArray([]),
    });

  }

  onCheckChangeAnimal(event: any){
    const selectedCountries = (this.animalForm.controls['answers'] as FormArray);
    if (event.target.checked) {
      selectedCountries.push(new FormControl(event.target.value));
    } else {
      const index = selectedCountries.controls
        .findIndex(x => x.value === event.target.value);
      selectedCountries.removeAt(index);
    }
  }

  onCheckChangeDinosaure(event: any){
    const selectedCountries = (this.animalForm.controls['answers'] as FormArray);
    if (event.target.checked) {
      selectedCountries.push(new FormControl(event.target.value));
    } else {
      const index = selectedCountries.controls
        .findIndex(x => x.value === event.target.value);
      selectedCountries.removeAt(index);
    }
  }

  onCheckChangeSystemeSolaire(event: any){
    const selectedCountries = (this.systemeSolaireForm.controls['answers'] as FormArray);
    if (event.target.checked) {
      selectedCountries.push(new FormControl(event.target.value));
    } else {
      const index = selectedCountries.controls
        .findIndex(x => x.value === event.target.value);
      selectedCountries.removeAt(index);
    }
  }

  submitAnimals(){
    this.calculerScore(this.animalForm.value);
  }

  submitDinosaures(){
    this.calculerScore(this.dinosaureForm.value);
  }

  submitSystemeSolaire(){
    this.calculerScore(this.systemeSolaireForm.value);
  }

  chooseAnimaux(){
    this.isAnimalsQuestions = true;
    this.isDinosaureQuestions = false;
    this.isSystemeSolaireQuestions = false;
  }

  chooseDinosaure(){
    this.isDinosaureQuestions = true;
    this.isAnimalsQuestions = false;
    this.isSystemeSolaireQuestions = false;
  }

  chooseSystemeSolaire(){
    this.isSystemeSolaireQuestions = true;
    this.isDinosaureQuestions = false;
    this.isAnimalsQuestions = false;
  }

  calculerScore(values: any){
    for (let answer of values.answers){
      if (answer === "true"){
        this.score++;
      }
    }
    this.afficherScore = true;
  }

  resetForm(){
    this.afficherScore = false;
    this.score = 0;
    this.isDinosaureQuestions = false;
    this.isAnimalsQuestions = false;
    this.isSystemeSolaireQuestions = false;
  }

}
