import { Routes } from '@angular/router';
import { commonRoutes } from './commun.routes';
import { adminRoutes } from './admin.routes';
import { colabRoutes } from './colab.routes';

export const routes: Routes = [...commonRoutes, ...adminRoutes, ...colabRoutes];
