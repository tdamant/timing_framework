require 'benchmark'

def getLargeArray(n)
  (0..n).to_a
end

def checkSpeed()
  arr = getLargeArray(1000)
  time = Benchmark.realtime{
    arr.reverse
  }
  puts time
end

100.times{checkSpeed()}
