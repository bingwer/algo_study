
# [2, 1, 1, 2, 3, 1, 2, 3, 1]

def hamburger(ingredient):
        
	gList = []
	burger = [1, 2, 3, 1]
	score = 0
	result = 0

	for n in ingredient:
		gList.append(n)
		if n == burger[score]:
			score += 1
		
		if score == 4:
			del gList[:-4]
			result += 1
			score = 0

			if 1 == gList[:-1]:
				score += 1
			elif 2 == gList[:-1]:
				if 1 == gList[:-2]:
					score += 2
			elif 3 == gList[:-1]:
				if 2 == gList[:-2]:
					if 1 == gList[:-3]:
						score += 3
	return result

# 만나면 1 3 2 1 순회
# 처음은 1 2 3 1 순회

# [2, 1, 2, 1, 2, 3, 1, 2, 3, 1]