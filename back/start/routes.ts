/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.post('logout', 'UserController.logout')
  Route.post('reg', 'UserController.reg')
  Route.get('/', 'UserController.user').middleware('auth')
  Route.get('refresh', 'UserController.refresh').middleware('auth')
}).prefix('user')

Route.group(() => {
  Route.get('/:limit?', 'NewsController.index')
  Route.post('/', 'NewsController.create')
  Route.delete('/:id', 'NewsController.delete')
  Route.put('/:id', 'NewsController.update')
}).prefix('news')

Route.group(() => {
  Route.get('/:id', 'CommentsController.index')
  Route.post('/:id', 'CommentsController.create')
}).prefix('comments')
Route.group(() => {
  Route.get('/', 'DocsController.index')
  Route.post('/', 'DocsController.create')
  Route.delete('/:id', 'DocsController.delete')
  Route.put('/:id', 'DocsController.update')
}).prefix('documents')
Route.group(() => {
  Route.get('/:limit?', 'GovernmentController.index')
  Route.post('/', 'GovernmentController.create')
  Route.delete ('/:id', 'GovernmentController.delete')
  Route.put('/:id', 'GovernmentController.update')
}).prefix('government')
Route.group(() => {
  Route.get('/', 'ContactsController.index')
  Route.post('/', 'ContactsController.create')
  Route.delete ('/:id', 'ContactsController.delete')
  Route.put('/:id', 'ContactsController.update')
}).prefix('contacts')
Route.group(() => {
  Route.put('/', 'ProfileController.update')
}).prefix('profile')