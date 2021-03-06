# 思路一

是我自己想的，但实现起来很麻烦，简单讲下算法：
设 $D_{K,N}$为 `K` 只猪检测 `N` 次的最大桶数，则有
$$D_{K,N} = \sum_{i=0}^{K}C_{k}^{i} D_{i,n-1}$$

且有

$$D_{K,0}=1，D_{0,N}=1$$

因为不测试肯定只能检验一个，没有猪也只能检验一个，$D_{K,N}$能检验的数量，是在本轮活下来的猪的数量的几种分叉乘以他们接下来 N-1 轮能检验的数量

比如：

$$D_{2,1}=1*D_{0,0}+2*D_{1,0},+1*D_{2,0}$$

分别对应在第一轮实验后，可能有三种存活猪的数量，0，1，2，其中 1 出现两次。在之后只剩下零轮，那这些情况都需要对应唯一一个桶。

但是公式太难推导了，我也不知道咋解决，最后看了评论区的答案，确实

$$D_{K,N}=(N+1)^{K}$$

# 思路二

一只猪喝水 N 次，可以校验 N+1 批数据（死在前 N 次中某一次+最后存活）
同理，两只猪交叉喝水，就可以将定位扩大到 N+1 的平方，

从而有

$$D_{K,N}=(N+1)^{K}$$
