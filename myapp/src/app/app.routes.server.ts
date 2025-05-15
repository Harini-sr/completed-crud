/* import { RenderMode, ServerRoute } from '@angular/ssr';

  export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];  */
 
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'add-form',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'edit-form/:id',
    renderMode: RenderMode.Server, // 👈 Dynamic render at request time
  },
  {
    path: 'display/:id',
    renderMode: RenderMode.Server, // 👈 Dynamic render at request time
  },
  {
    path: 'delete/:id',
    renderMode: RenderMode.Server, // 👈 Dynamic render at request time
  },
];

