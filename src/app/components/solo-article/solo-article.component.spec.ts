import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloArticleComponent } from './solo-article.component';

describe('SoloArticleComponent', () => {
  let component: SoloArticleComponent;
  let fixture: ComponentFixture<SoloArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoloArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoloArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
