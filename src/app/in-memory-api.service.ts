import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryApiService implements InMemoryDbService {

  constructor() { 
  }
  createDb() {
    const users = [
      {
        "id": "5aba3f8a4b593c4e6a04531c",
        "isActive": false,
        "name": "Patrick Barlow",
        "email": "patrickbarlow@frenex.com"
      },
      {
        "id": "5aba3f8a53e13971196c5f28",
        "isActive": false,
        "name": "Reese Daniels",
        "email": "reesedaniels@frenex.com"
      },
      {
        "id": "5aba3f8a30b05ed345bd2f19",
        "isActive": true,
        "name": "Bullock Burke",
        "email": "bullockburke@frenex.com"
      },
      {
        "id": "5aba3f8a39853dadad5eddee",
        "isActive": true,
        "name": "Ballard Chang",
        "email": "ballardchang@frenex.com"
      },
      {
        "id": "5aba3f8a765b1322ad5db5f4",
        "isActive": false,
        "name": "Lela Silva",
        "email": "lelasilva@frenex.com"
      },
      {
        "id": "5aba3f8ac8df166aaae512eb",
        "isActive": true,
        "name": "Shelby Buckner",
        "email": "shelbybuckner@frenex.com"
      },
      {
        "id": "5aba3f8ae6fff073b7e2d6c3",
        "isActive": true,
        "name": "Mcdowell Herman",
        "email": "mcdowellherman@frenex.com"
      },
      {
        "id": "5aba3f8a16fbadfc9e2cbe9d",
        "isActive": false,
        "name": "Lawson Henry",
        "email": "lawsonhenry@frenex.com"
      },
      {
        "id": "5aba3f8a952ae1639d3876e9",
        "isActive": false,
        "name": "Angeline Emerson",
        "email": "angelineemerson@frenex.com"
      },
      {
        "id": "5aba3f8a9a64ffdac045a534",
        "isActive": false,
        "name": "Vicky Woodard",
        "email": "vickywoodard@frenex.com"
      },
      {
        "id": "5aba3f8aceda0adba08ea4be",
        "isActive": false,
        "name": "Sheila Trujillo",
        "email": "sheilatrujillo@frenex.com"
      },
      {
        "id": "5aba3f8ab08c72b14f7644bd",
        "isActive": false,
        "name": "Samantha Snyder",
        "email": "samanthasnyder@frenex.com"
      },
      {
        "id": "5aba3f8abc56612c8e43bd09",
        "isActive": true,
        "name": "Beard Clemons",
        "email": "beardclemons@frenex.com"
      },
      {
        "id": "5aba3f8a0c8acd29215c27e0",
        "isActive": false,
        "name": "Crane Walter",
        "email": "cranewalter@frenex.com"
      },
      {
        "id": "5aba3f8a8fdd35c9e155cc12",
        "isActive": true,
        "name": "Medina Little",
        "email": "medinalittle@frenex.com"
      },
      {
        "id": "5aba3f8a97938f5f146929a5",
        "isActive": false,
        "name": "Melva Hamilton",
        "email": "melvahamilton@frenex.com"
      },
      {
        "id": "5aba3f8aecbb9ff3c5fd5873",
        "isActive": false,
        "name": "Bauer Ashley",
        "email": "bauerashley@frenex.com"
      },
      {
        "id": "5aba3f8adaed8886fe563c37",
        "isActive": true,
        "name": "Fisher Gross",
        "email": "fishergross@frenex.com"
      },
      {
        "id": "5aba3f8adf7917fd3ce03b45",
        "isActive": false,
        "name": "Queen Reeves",
        "email": "queenreeves@frenex.com"
      },
      {
        "id": "5aba3f8af57ab2c5a9672a40",
        "isActive": false,
        "name": "Jackson Dorsey",
        "email": "jacksondorsey@frenex.com"
      },
      {
        "id": "5aba3f8aa1b5a61694b5142b",
        "isActive": true,
        "name": "Salazar Mckee",
        "email": "salazarmckee@frenex.com"
      },
      {
        "id": "5aba3f8ace2953c562903722",
        "isActive": false,
        "name": "Chris Walls",
        "email": "chriswalls@frenex.com"
      },
      {
        "id": "5aba3f8a14df9bd529b00566",
        "isActive": true,
        "name": "Carissa Morrison",
        "email": "carissamorrison@frenex.com"
      },
      {
        "id": "5aba3f8a5c3e09fa424f13a1",
        "isActive": false,
        "name": "Cornelia Navarro",
        "email": "cornelianavarro@frenex.com"
      },
      {
        "id": "5aba3f8af8834eec45aa25ea",
        "isActive": true,
        "name": "David West",
        "email": "davidwest@frenex.com"
      }
    ];
    return {users};
  }

}
