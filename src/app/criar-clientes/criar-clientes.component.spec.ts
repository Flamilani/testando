import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarClientesComponent } from './criar-clientes.component';

describe('CriarClientesComponent', () => {
  let component: CriarClientesComponent;
  let fixture: ComponentFixture<CriarClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
