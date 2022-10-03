using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interface;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ToDoListController : BaseApiController
    {
        private readonly IToDoListRepository _repository;
        public ToDoListController(IToDoListRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<ToDoList>> GetAllToDoList()
        {
            var result = await _repository.GetAllDoLists();
            return Ok(result);
        }

        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<ToDoList>> GetToDoListById(Guid Id) 
        {
            var result = await _repository.GetToDoListById(Id);
            if(result == null)
            {
                return NotFound();
            }
            return result;
        }

        [HttpPost]
        public async Task<ActionResult<ToDoList>> CreateNewToDoList(ToDoList toDoList)
        {
            return await _repository.CreateNewToDoList(toDoList);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateToDoList(ToDoList toDoList)
        {
            _repository.UpdateToDoList(toDoList);
            return Ok();
        }

        [HttpDelete("{id:Guid}")]
        public async Task<ActionResult<ToDoList>> CreateNewToDoList(Guid Id)
        {
            try
            {
                var result = await _repository.GetToDoListById(Id);

                if(result == null)
                {
                    return NotFound($"ToDoList with Id = {Id} not found");
                }

                return await _repository.DeleteToDoList(Id);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}