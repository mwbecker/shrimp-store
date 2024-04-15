import { Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Shrimp} from '../shrimp';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShrimpService } from '../shrimp.service';
import { environment } from '../../environments/environment';

@Component({
  standalone:true,
  selector: 'app-shrimp-detail',
  templateUrl: './shrimp-detail.component.html',
  styleUrl: './shrimp-detail.component.css',
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class ShrimpDetailComponent {
    @Input() shrimp?: Shrimp;
    baseUrl: string = environment.httpBaseURL ;

    constructor(
      private route: ActivatedRoute,
      private shrimpService: ShrimpService,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.getShrimp();
    }
    
    getShrimp(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.shrimpService.getShrimp(id)
        .subscribe(shrimp => this.shrimp = shrimp);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      if (this.shrimp) {
        this.shrimpService.updateShrimp(this.shrimp)
          .subscribe(() => this.goBack());
      }
    }
    
}
