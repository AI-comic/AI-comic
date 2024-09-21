<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>네이버 무료 체험단</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic.css" rel="stylesheet">
    <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
    <style>a {text-decoration: none}</style>
</head>
<body>
    <header>
        <h1>네이버 무료 체험단</h1>
    </header>
    <main>
        <table>
            <thead>
                <tr>
                    <th>분류
                        <button onclick="sortTable(0, 'asc')">▲</button>
                        <button onclick="sortTable(0, 'desc')">▼</button>
                        <select id="category-filter" onchange="filterByCategory()">
                            <option value="">전체</option>
                            <option value="뷰티">뷰티</option>
                            <option value="키즈윈도">키즈윈도</option>
                            <option value="네이버 펫">네이버 펫</option>
                            <option value="리빙윈도">리빙윈도</option>
                            <option value="푸드윈도">푸드윈도</option>
                            <option value="플레이윈도">플레이윈도</option>
                        </select>
                    </th>
                    <th>제목</th>
                    <th>신청 기간
                        <button onclick="sortTable(2, 'asc')">▲</button>
                        <button onclick="sortTable(2, 'desc')">▼</button>
                    </th>
                    <th>모집 인원</th>
                    <th>사진</th>
                </tr>
            </thead>
            <tbody id="data-table-body">
                <!-- JavaScript 자료가 들어갈 공간 -->
            </tbody>
        </table>
    </main>
    <script src="script.js"></script>
</body>
</html>
