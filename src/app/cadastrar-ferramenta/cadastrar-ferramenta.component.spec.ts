import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFerramentaComponent } from './cadastrar-ferramenta.component';

describe('CadastrarFerramentaComponent', () => {
  let component: CadastrarFerramentaComponent;
  let fixture: ComponentFixture<CadastrarFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFerramentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
