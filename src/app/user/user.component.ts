import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userId?: string;
  users?: any[];
  constructor(private route: ActivatedRoute,private usersService : HttpService) {}
  ngOnInit(): void {
   this.userId=this.route.snapshot.paramMap.get('id') || "";
  this.usersService.getUsers().subscribe(users=>{
    this.users=users
  });
    }
 
  }

