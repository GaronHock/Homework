  class Stack
    attr_reader :my_array
    def initialize
        @my_array = []
    end

    def push(el)
      my_array.push(el)
    end

    def pop
      my_array.pop 
    end

    def peek
      puts my_array.last
    end
end

  class Queue 

    attr_reader :my_queue
    
    def initialize
        @my_queue = []
    end
    def enqueue(el)
        my_queue.unshift(el)
    end

    def dequeue 
        my_queue.pop
    end

    def peek 
        puts my_queue.last
    end
end

class Map
    attr_reader :my_map
    def initialize
        @my_map = [] 
    end


    def set(key,value)
        my_map.unshift([key,value])
    end

    def get(key)
        my_map.each do |ele|
            ele.each do |k|
                if key == k 
                    return ele[-1] 
                end
            end
        end
    end


end


#my_map = [[k1, v1], [k2, v2], [k3, v2], ...].

#set(key, value)
#get(key), delete(key), show