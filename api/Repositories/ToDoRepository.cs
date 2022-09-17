using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class ToDoRepository : IToDoRepository
    {
        private readonly DataContext _dataContext;

        public ToDoRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<IEnumerable<ToDo>> GetAllTodos()
        {
            return await _dataContext.Todos.ToListAsync();
        }

        public async Task<ToDo> GetToDosById(int id)
        {
            return await _dataContext.Todos.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<ToDo> SaveToDo(ToDo todo)
        {
            throw new NotImplementedException();
        }

        public async Task<ToDo> UpdateToDo(ToDo todo)
        {
            throw new NotImplementedException();
        }

        public async Task<ToDo> DeleteToDo(int id)
        {
            throw new NotImplementedException();
        }
    }
}