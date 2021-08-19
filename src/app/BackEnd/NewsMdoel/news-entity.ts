export class NewsEntity {
    id?:number;
    name:string;
    dateSubmit:string;
    content1:string;
    content2:string;
    image:string;
    user_id?: {
        emailId?: string | number;
        userName?: string;
        role_id?: {
          name?: string;
        }
    }
}
