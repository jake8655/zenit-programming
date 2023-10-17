_ = input()

costs = list(map(int, input().split()))
result = []

for i in range(len(costs)):
    newCosts = costs.copy()
    newCosts.pop(i)
    result.append(sum(newCosts))

print(*result, sep="\n")
