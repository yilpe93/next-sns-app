## [Git Squash & Git Rebase](https://zzang9ha.tistory.com/417)

- Git Squash는 여러 개의 커밋 이력을 하나의 커밋 이력으로 만들때 사용합니다.
- Git Rebase는 두 개의 공통 base를 가진 브랜치에서, A 브랜치의 base를 B 브랜치의 최신 커밋으로 base를 옮기는 작업을 의미합니다.(base를 다시 설정)

```bash
$ git rebase -i HEAD~6 // 6 = 합치고자 하는 커밋의 수
```