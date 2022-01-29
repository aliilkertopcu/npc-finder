import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { CharacterGridListComponent } from "./character-gridlist/character-gridlist.component";

const characterRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: CharacterGridListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(characterRoutes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
