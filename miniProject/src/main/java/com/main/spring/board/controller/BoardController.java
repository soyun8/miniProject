package com.main.spring.board.controller;

import com.main.spring.board.dto.BoardDto;
import com.main.spring.board.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @PostMapping(value = "/api/ip")
    public ResponseEntity<String> ip (HttpServletRequest request) {
        // 요청을 보낸 클라이언트의 IP주소를 반환합니다.
        return ResponseEntity.ok(request.getRemoteAddr());
    }
    
//    게시판 목록 조회하기
    @GetMapping(value = "/list", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<BoardDto>> getboardList() {
        List<BoardDto> boards = this.boardService.findAll();
        return new ResponseEntity<List<BoardDto>>(boards, HttpStatus.OK);
    }
}