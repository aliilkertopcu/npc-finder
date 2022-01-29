import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) { }

  public get(filters: { name: string; race: string; gender: string; hair: string; }) {

    const params = new HttpParams().set('filters', JSON.stringify(filters));
    return this.http.get(environment.apiEndpoint + '/characters', { params: params }).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  public getOptions(): any {
    return {
      genders: [
        { id: 'Female', text: 'Female' },
        { id: 'Male', text: 'Male' },
        { id: 'Males', text: 'Males' },
        { id: 'Most likely male', text: 'Most likely male' },
        { id: 'NaN', text: 'NaN' },
        { id: 'male', text: 'male' }
      ],
      races: [
        { id: '14', text: 'Ainur' },
        { id: '34', text: 'Balrog' },
        { id: '13', text: 'Black Uruk' },
        { id: '7', text: 'Dragon' },
        { id: '11', text: 'Dragons' },
        { id: '2', text: 'Dwarf' },
        { id: '16', text: 'Dwarves' },
        { id: '35', text: 'Eagle' },
        { id: '25', text: 'Eagles' },
        { id: '1', text: 'Elf' },
        { id: '9', text: 'Elves' },
        { id: '5', text: 'Ent' },
        { id: '33', text: 'Ents' },
        { id: '22', text: 'Goblin,Orc' },
        { id: '18', text: 'God' },
        { id: '27', text: 'Great Eagles' },
        { id: '12', text: 'Great Spiders' },
        { id: '20', text: 'Half-elven' },
        { id: '3', text: 'Hobbit' },
        { id: '29', text: 'Hobbits' },
        { id: '23', text: 'Horse' },
        { id: '0', text: 'Human' },
        { id: '4', text: 'Maiar' },
        { id: '28', text: 'Maiar,Balrogs' },
        { id: '10', text: 'Men' },
        { id: '17', text: 'Men,Wraith' },
        { id: '8', text: 'NaN' },
        { id: '24', text: 'Orc' },
        { id: '31', text: 'Orc,Goblin' },
        { id: '6', text: 'Orcs' },
        { id: '15', text: 'Raven' },
        { id: '36', text: 'Stone-trolls' },
        { id: '26', text: 'Uruk-hai' },
        { id: '30', text: 'Uruk-hai,Orc' },
        { id: '32', text: 'Urulóki' },
        { id: '37', text: 'Vampire' },
        { id: '21', text: 'Werewolves' },
        { id: '19', text: 'Wolfhound' },
      ],
      hairs: [
        { id: '63', text: 'Almost golden' },
        { id: '43', text: 'Auburn' },
        { id: '55', text: 'Auburn (film)' },
        { id: '45', text: 'Became grey in captivity' },
        { id: '8', text: 'Black' },
        { id: '77', text: 'Black (film)' },
        { id: '13', text: 'Black (films)' },
        { id: '81', text: 'Black with red stripes' },
        { id: '14', text: 'Black/ Grey (film)' },
        { id: '32', text: 'Blond' },
        { id: '47', text: 'Blond (Video game)' },
        { id: '36', text: 'Blond (movie)' },
        { id: '9', text: 'Blonde' },
        { id: '42', text: 'Blonde (film)' },
        { id: '38', text: 'Blonde or Golden' },
        { id: '10', text: 'Brown' },
        { id: '12', text: 'Brown (film)' },
        { id: '52', text: 'Brown (films)' },
        { id: '16', text: 'Brown (movie)' },
        { id: '59', text: 'Brown Gray (movie)' },
        { id: '53', text: 'Brown with copperlike-red' },
        { id: '82', text: 'Brown, graying, later white' },
        { id: '39', text: 'Brown, later gray' },
        { id: '15', text: 'Brown, later white' },
        { id: '65', text: 'Brown-gray (films)' },
        { id: '2', text: 'Dark' },
        { id: '75', text: 'Dark ' },
        { id: '30', text: 'Dark (Decipher Card)' },
        { id: '19', text: 'Dark (book) Light brown (movie)' },
        { id: '6', text: 'Dark (film)' },
        { id: '83', text: 'Dark (movie)' },
        { id: '20', text: 'Dark Blonde' },
        { id: '21', text: 'Dark Brown' },
        { id: '17', text: 'Dark Brown (films)' },
        { id: '3', text: 'Dark brown' },
        { id: '4', text: 'Dark red' },
        { id: '28', text: 'Dark, grey (in old age)' },
        { id: '56', text: 'Dark, grey in old age' },
        { id: '54', text: 'Dark, later grey ' },
        { id: '5', text: 'Dark, then grey (film)' },
        { id: '31', text: 'Dark-brown' },
        { id: '74', text: 'Dirty blond' },
        { id: '25', text: 'Fair' },
        { id: '18', text: 'Ginger' },
        { id: '1', text: 'Golden' },
        { id: '40', text: 'Golden (movie)' },
        { id: '22', text: 'Golden yellow (film)' },
        { id: '49', text: 'Golden, grey (in old age)' },
        { id: '46', text: 'Gray' },
        { id: '29', text: 'Gray (film)' },
        { id: '64', text: 'Grey, later white' },
        { id: '61', text: 'Grey-white' },
        { id: '78', text: 'Grey/white strands of hair (film)' },
        { id: '68', text: 'Leaf, twig and moss like' },
        { id: '84', text: 'Leafy-hair' },
        { id: '26', text: 'Light brown (film)' },
        { id: '85', text: 'Mane of red flame' },
        { id: '67', text: 'Mane of red flames' },
        { id: '69', text: 'Most likely black or none' },
        { id: '70', text: 'NaN' },
        { id: '71', text: 'None' },
        { id: '73', text: 'Pale gold' },
        { id: '37', text: 'Possibly blond' },
        { id: '7', text: 'Possibly dark' },
        { id: '57', text: 'Possibly golden' },
        { id: '41', text: 'Possibly golden (book) Dark brown (movie)' },
        { id: '24', text: 'Possibly silver' },
        { id: '50', text: 'Probably Golden' },
        { id: '34', text: 'Raven' },
        { id: '44', text: 'Red, later White' },
        { id: '58', text: 'Reddish brown' },
        { id: '48', text: 'Reddish brown (movie)' },
        { id: '60', text: 'Sandy' },
        { id: '23', text: 'Silver' },
        { id: '27', text: 'Silver, bearded' },
        { id: '33', text: 'Star-like' },
        { id: '51', text: 'Uncertain (book), Blonde (films)' },
        { id: '72', text: 'Varies, White ' },
        { id: '66', text: 'Various' },
        { id: '11', text: 'White' },
        { id: '76', text: 'White or grey' },
        { id: '62', text: 'White with braids (book) Blonde (films)' },
        { id: '35', text: 'Yellow' },
        { id: '80', text: 'black' },
        { id: '86', text: 'none' },
        { id: '79', text: 'white/gray, possibly light brown (film)' }
      ]
    }
  }

  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
