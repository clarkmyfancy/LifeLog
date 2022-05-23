export class Task {
    public id: string;
    public is_on_success_list: boolean;
    public title: string;
    public is_urgent: boolean;
    public is_important: boolean;
    public ideal_complete_before_datetime: Date;
    public actual_completion_datetime? : Date;
    public date_created: Date;
}