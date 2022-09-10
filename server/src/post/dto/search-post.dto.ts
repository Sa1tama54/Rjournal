export class SearchPostDto {
  title?: string;
  body?: string;
  views?: 'DESC' | 'ASC';
  tags?: string;
}
