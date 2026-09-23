$ErrorActionPreference = 'Stop'

Write-Host "===================================================================="
Write-Host "  TESTING SANSKRITI DARSHAN REST API & FRONTEND"
Write-Host "===================================================================="

# 1. Test States API
Write-Host "`n[1/5] Testing GET /api/states..."
$states = Invoke-RestMethod -Uri 'http://localhost:8080/api/states'
Write-Host "Total States & UTs returned: $($states.Count)"
$first3 = $states[0..2]
foreach ($st in $first3) {
    Write-Host " - $($st.name) ($($st.code)) [$($st.type)], Capital: $($st.capital)"
}

# 2. Test District API
Write-Host "`n[2/5] Testing GET /api/districts/1 (Jaipur details)..."
$dst = Invoke-RestMethod -Uri 'http://localhost:8080/api/districts/1'
Write-Host "District Name: $($dst.name)"
Write-Host "Why Famous: $($dst.whyFamous.Substring(0, 75))..."
Write-Host "Monuments count: $($dst.places.Count)"
foreach ($p in $dst.places) {
    Write-Host "   * Place: $($p.name) [$($p.category)] - $($p.historicalPeriod)"
}
Write-Host "Culture items count: $($dst.cultureItems.Count)"
foreach ($c in $dst.cultureItems) {
    Write-Host "   * Culture [$($c.type)]: $($c.name)"
}

# 3. Test Stories Feed API
Write-Host "`n[3/5] Testing GET /api/stories..."
$stories = Invoke-RestMethod -Uri 'http://localhost:8080/api/stories'
Write-Host "Stories retrieved: $($stories.Count)"
Write-Host "Top Story: '$($stories[0].title)' by $($stories[0].authorName)"

# 4. Test Story Creation & Upvoting
Write-Host "`n[4/5] Testing POST /api/stories (Citizen Story Contribution)..."
$payload = @{
    title = 'Ancient Terracotta Temples of Bishnupur'
    authorName = 'Sourav Banerjee'
    stateName = 'West Bengal'
    districtName = 'Bankura'
    category = 'Hidden Gem'
    storyText = 'Bishnupur in Bankura has magnificent terracotta temples built by Malla kings where every burnt brick depicts epic scenes!'
    mediaType = 'IMAGE'
    mediaUrl = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
} | ConvertTo-Json

$created = Invoke-RestMethod -Uri 'http://localhost:8080/api/stories' -Method Post -Body $payload -ContentType 'application/json'
Write-Host "Successfully created story! ID: $($created.id), Title: '$($created.title)'"

Write-Host "Testing Story Upvote..."
$upvoted = Invoke-RestMethod -Uri "http://localhost:8080/api/stories/$($created.id)/upvote" -Method Post
Write-Host "Story upvotes incremented to: $($upvoted.upvotes)"

# 5. Test Frontend Delivery
Write-Host "`n[5/5] Testing Web Frontend Delivery (GET /index.html)..."
$page = Invoke-WebRequest -Uri 'http://localhost:8080/index.html' -UseBasicParsing
Write-Host "HTTP Status: $($page.StatusCode)"
Write-Host "Content Size: $($page.RawContentLength) bytes"

Write-Host "`n===================================================================="
Write-Host "  ALL TESTS PASSED SUCCESSFULLY! 100% OPERATIONAL."
Write-Host "===================================================================="
