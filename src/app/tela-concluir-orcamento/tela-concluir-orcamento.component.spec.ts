import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConcluirOrcamentoComponent } from './tela-concluir-orcamento.component';

describe('TelaConcluirOrcamentoComponent', () => {
  let component: TelaConcluirOrcamentoComponent;
  let fixture: ComponentFixture<TelaConcluirOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaConcluirOrcamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConcluirOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
