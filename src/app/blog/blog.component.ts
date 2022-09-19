import { Component, OnInit } from '@angular/core';
import { Blog } from '../Models/blogModels';
import { MenuItem } from '../Models/nav-models';
import { ApiBaseService } from '../services/api-base.service';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  SelectedMenuItem: MenuItem;
  BlogPosts: Blog[] =[];
  constructor(private baseSvc:ApiBaseService, private blogSvc:BlogsService)
  {
   this.SelectedMenuItem=baseSvc.GetMenuItemImage("Blogs");   
   
   this.blogSvc.GetPosts().subscribe(blogsPosts=>this.BlogPosts=blogsPosts),err => {console.log(err)};
  }

  ngOnInit(): void {
  }

}
