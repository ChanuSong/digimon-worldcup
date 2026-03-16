# Digimon World Cup

심리검사를 통해 사용자와 가장 잘 맞는 파트너 디지몬을 추천하는 모바일 중심 정적 웹앱입니다.

## 포함된 기능

- 10문항 심리검사
- 디지몬 성향 데이터셋 및 이미지 아카이브
- 1, 2, 3위 파트너 추천 결과
- 추천 이유 및 사용자 성향 시각화
- 추천 1위 디지몬과의 교감 인터랙션
- 모바일 우선 반응형 UI

## 로컬 실행

정적 사이트라서 별도 설치 없이 실행할 수 있습니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

## GitHub에 올리기

현재 이 워크스페이스는 아직 Git 레포가 아닙니다. 개인 GitHub 레포를 만든 뒤 아래 순서로 올리면 됩니다.

```bash
git init
git add .
git commit -m "Initial digimon partner quiz site"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Vercel Hobby 배포

1. Vercel에서 `New Project` 선택
2. GitHub 레포 import
3. Framework Preset은 `Other`
4. Build Command 비움
5. Output Directory 비움
6. Deploy

정적 파일만 사용하므로 추가 환경변수 없이 바로 배포할 수 있습니다.

## 참고

- 디지몬 성격 설명은 이 프로젝트의 매칭 경험을 위한 해석형 데이터셋입니다.
- 이미지 URL은 외부 공개 리소스를 참조합니다.
