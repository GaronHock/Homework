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