import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacterGridListComponent } from './character-gridlist.component';

describe('CharacterGridListComponent', () => {
  let component: CharacterGridListComponent;
  let fixture: ComponentFixture<CharacterGridListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterGridListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
