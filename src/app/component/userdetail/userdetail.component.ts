import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, User } from '../../services/api.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: User | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get ID from URL
    
    if (id) {
      this.apiService.getUserById(id).subscribe({
        next: (data) => {
          this.user = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching user:', err);
          this.error = 'User not found or API error.';
          this.loading = false;
        }
      });
    } else {
        this.error = 'Invalid User ID';
        this.loading = false;
    }
  }
}
