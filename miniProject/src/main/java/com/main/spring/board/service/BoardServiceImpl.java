package com.main.spring.board.service;

import com.main.spring.board.dto.BoardListResponseDTO;
import com.main.spring.board.dto.BoardSaveRequestDTO;
import com.main.spring.board.dto.BoardSelectResponseDTO;
import com.main.spring.board.entity.Board;
import com.main.spring.board.entity.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{

    private final BoardRepository boardRepository;

    public Long updateBoard() {
        return null;
    }

    @Override
    @Transactional
    public void saveBoard(BoardSaveRequestDTO requestDto) {

        boardRepository.save(requestDto.toEntity());
    }

    /**
     *
     * 게시글 삭제
     */
    @Override
    public void deleteBoard(Long id) {
        Board board = boardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException());
        boardRepository.delete(board);

    }

    /**
     *
     * 게시글 목록을 불러온다.
     */
    @Override
    @Transactional(readOnly = true)
    public List<BoardListResponseDTO> boardList() {
        List<Board> boardList = boardRepository.findAll();
        List<BoardListResponseDTO> responseDtos = boardList.stream()
                .map(m -> new BoardListResponseDTO(m.getIdx(),m.getTitle(),m.getCreate_date(),m.getHit_cnt()))
                .collect(Collectors.toList());

        return responseDtos;
    }

    /**
     *
     * 사용자가 게시글을 선택한다.
     */
    @Override
    @Transactional
    public BoardSelectResponseDTO selectBoard(Long id) {
        boardRepository.hitUpdate(id);
        Optional<Board> selected = boardRepository.findById(id);
         return new BoardSelectResponseDTO(selected.get().getTitle(),selected.get().getContent());

    }

    @Transactional
    public int updateHit(Long id){
        return boardRepository.hitUpdate(id);
    }
}
