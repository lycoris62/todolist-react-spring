package com.lycoris62.todolist.controller;

import com.lycoris62.todolist.domain.Todo;
import com.lycoris62.todolist.service.TodoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("todos")
    @ResponseBody
    public List<Todo> todo() {
        List<Todo> todos = todoService.findTodos();
        return todos;
    }

    @PostMapping("todos/new")
    @ResponseBody
    public List<Todo> create(TodoForm form) {
        Todo todo = new Todo();
        todo.setContent(form.getContent());
        todo.setIsDone(false);
        todoService.add(todo);
        return todoService.findTodos();
    }

    @PostMapping("todos/update/done")
    @ResponseBody
    public List<Todo> updateDone(@RequestParam("id") Long id) {
        return todoService.updateTodoDone(id);
    }

    @PostMapping("todos/update/content")
    @ResponseBody
    public List<Todo> updateTodo(@RequestParam("id") Long id, @RequestParam("content") String content) {
        return todoService.updateTodoContent(id, content);
    }
}
