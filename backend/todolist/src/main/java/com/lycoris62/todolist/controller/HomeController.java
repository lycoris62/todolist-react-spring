package com.lycoris62.todolist.controller;

import com.lycoris62.todolist.domain.Todo;
import com.lycoris62.todolist.domain.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index.html";
    }

    @GetMapping("user")
    @ResponseBody
    public User user(@RequestParam("nickname") String nickname, @RequestParam("password") String password) {
        User user = new User();
        user.setUserId(1l);
        user.setNickname(nickname);
        user.setPassword(password);
        return user;
    }

    @GetMapping("todo")
    @ResponseBody
    public Todo todo(@RequestParam("todoStr") String todoStr) {
        Todo todo = new Todo();
        todo.setId(1l);
        todo.setTodo(todoStr);
        todo.setDone(false);
        return todo;
    }
}
