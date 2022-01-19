package com.main.spring.domain;

import lombok.*;

import javax.persistence.*;

@ToString @Getter  @AllArgsConstructor
@Table(name = "tbl_memo")
@Entity
@Builder

public class Memo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //MySQL의 AUTO_INCREMENT를 사용
     private Long id;
    @Column(length = 200, nullable = false)
    private String memoText;

    public Memo() {
    }
}
