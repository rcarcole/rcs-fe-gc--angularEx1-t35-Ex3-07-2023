import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtComponent } from './admin-art.component';

describe('AdminArtComponent', () => {
  let component: AdminArtComponent;
  let fixture: ComponentFixture<AdminArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArtComponent]
    });
    fixture = TestBed.createComponent(AdminArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
