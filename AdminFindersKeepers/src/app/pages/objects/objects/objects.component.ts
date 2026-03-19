import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin/admin.service';
import { UserObject } from '../../../core/models/object.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss'],
    imports: [CommonModule],
})
export class ObjectsComponent implements OnInit {
  objects: UserObject[] = [];
  loading = false;
  error: string | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadObjects();
  }

  loadObjects(): void {
    this.loading = true;
    this.adminService.getAllObjects().subscribe({
      next: (data) => {
        this.objects = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }
toggleObjectReclame(obj: UserObject): void {
  const updatedObject = { ...obj, reclame: !obj.reclame };

  this.adminService.updateObjectReclame(updatedObject.id, updatedObject.reclame).subscribe({
    next: () => {
      obj.reclame = updatedObject.reclame;
      this.loadObjects(); // ou this.applyFilters() si tu filtres
    },
    error: () => {
      alert("Erreur lors de la mise à jour de l'état de l'objet.");
    }
  });
}


  deleteObject(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet objet ?')) {
      this.adminService.deleteObject(id).subscribe({
        next: () => {
          this.objects = this.objects.filter(obj => obj.id !== id);
        },
        error: (err) => {
          alert('Erreur lors de la suppression : ' + err.message);
        }
      });
    }
  }
}