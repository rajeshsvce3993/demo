import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';
import { PizzaComponent } from './pizza/pizza.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent  },
  { path: 'child', component: ChildComponent  },
  { path: 'sibling', component: SiblingComponent  },
  { path: 'test', component: TestComponent  },
  { path: 'product', component: ProductComponent  },
  { path: '', component: PizzaComponent  },

//  { path: 'home', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
