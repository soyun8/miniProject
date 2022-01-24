package com.main.spring.board.controller;

import com.main.spring.board.dto.BoardListResponseDTO;
import com.main.spring.board.dto.BoardSaveRequestDTO;
import com.main.spring.board.dto.BoardSelectResponseDTO;
import com.main.spring.board.service.BoardService;
import com.main.spring.board.service.BoardServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;


    @GetMapping("/list")
    public List<BoardListResponseDTO> boardResponse(){

        return boardService.boardList();

    }
    @GetMapping("/{idx}")
    public BoardSelectResponseDTO selectPosts(@PathVariable("idx") Long idx){
        log.info("로그로그 {}", idx);
        return boardService.selectBoard(idx);
    }

    @GetMapping("/write")
    public String getWrite(){
        return null;
    }

    @PostMapping("/write")
    public String postWrite(@RequestBody BoardSaveRequestDTO request){
        boardService.saveBoard(request);
        return "success";
    }

    @DeleteMapping("/{idx}")
    public String deletePosts(@PathVariable("idx") Long idx){
        boardService.deleteBoard(idx);
        return "success";
    }

}