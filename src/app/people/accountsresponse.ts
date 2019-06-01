import {Person} from "./person";

 // {"content":[{"id":1,"name":"defaultUser"}],"last":true,"totalPages":1,
// "totalElements":1,"first":true,"sort":null,"number":0,"size":20,"numberOfElements":1}
export class AccountsResponse {
  private _content: Person[];
  private last = false;
  private totalPages: number;
  //  "totalElements":1,"first":true,"sort":null,"number":0,"size":20,"numberOfElements":1}

  public constructor(
    fields?: {
      content?: Person[],
      last?: boolean,
      totalPages?: number
    }) {
    if (fields) {
      // this.id = fields.id || this.id;
      this._content = fields.content || this._content;
      this.last = fields.last || this.last;
      this.totalPages = fields.totalPages || this.totalPages;
    }
  }

  public get content(): Person[] {
    return this._content;
  }
}
