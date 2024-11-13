package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoResourcesController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping(path = "/users/{name}/todos")
	public List<Todo> getTodosForUser(@PathVariable String name){
		return todoService.findByUsername(name);
		
	}
	@DeleteMapping(path = "/users/{name}/todos/{id}")
	public ResponseEntity<Void> DeleteTodoForUserbyId(@PathVariable String name,@PathVariable int id){
		todoService.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
	@GetMapping(path = "/users/{name}/todos/{id}")
	public Todo GetTodoForUserbyId(@PathVariable String name,@PathVariable int id){
		return todoService.findById(id);
		
	}
	@PutMapping(path = "/users/{name}/todos/{id}")
	public Todo updateTodo(@PathVariable String name,@PathVariable int id, @RequestBody Todo todo){
		todoService.updateTodo(todo);
		return todo;
		
	}
	@PostMapping(path = "/users/{name}/todos")
	public Todo createTodo(@PathVariable String name, @RequestBody Todo todo){
		todoService.addTodo(name,todo.getDescription(),todo.getTargetDate(),todo.isDone());
		return todo;
		
	}
	
	
}
