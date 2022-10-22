// 封装节点类
export class Node {
    element
    next = null
    constructor(element) {
        this.element = element
        this.next = null     
    }
}

// 单向链表结构的封装
export class LinkedList {
    constructor() {
        // 初始化链表长度为 0
        this.size = 0

        // 初始 head 为 null, head 指向链表的第一个节点
        // this.head = null

        // 虚拟 头节点
        this.dummyHead = new Node(null)
    }
    
    // 获取链表的长度
    getSize () {
        return this.size
    }

    // 判断链表是否为空
    isEmpty () {
        return this.size === 0
    }

    // 在链表的 index(0-based)位置添加新的元素
    // 在链表中不是一个常用的操作，练习用
    add (index, element) {
        if (index < 0 || index > this.size) return false
        
        // if (index === 0) {
        //     this.addFirst(element)
        // } else {
        //     let prev = this.head
        //     for (let i = 0; i < index - 1; i++) {
        //         prev = prev.next
        //     }
        //     const node = new Node(element)
        //     node.next = prev.next
        //     prev.next = node
        // }
        // this.size ++
        let prev = this.dummyHead
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        const node = new Node(element)
        node.next = prev.next
        prev.next = node
        this.size ++
    }

    // 在链表头添加新的元素
    addFirst (element) {
        // const node = new Node(element)
        // node.next = this.head
        // this.head = node
        // this.size ++
        this.add(0, element)
    }

    // 在链表末尾添加新的元素
    addLast (element) {
        this.add(this.size, element)
    }

    // 在链表的 index(0-based)位置添加新的元素
    // 在链表中不是一个常用的操作，练习用
    get (index) {
        if (index < 0 || index >= this.size) return null
        let cur = this.dummyHead.next
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }

        return cur.element
    }

    // 获得链表的第一个元素
    getFirst () {
        return this.get(0)
    }

    // 获得链表的最后一个元素
    getLast () {
        return this.get(this.size - 1)
    }

    // 修改链表的第index(0-based)个位置的元素
    // 在链表中不是一个常用的操作，练习用
    set (index, element) {
        if (index < 0 || index >= this.size) return false
        let cur = this.dummyHead.next
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        cur.element = element

        return cur
    }

    // 查找链表中是否有元素
    contains (element) {
        let cur = this.dummyHead.next
        while(cur != null) {
            if (cur.element === element) {
                return true
            }
            cur = cur.next
        }
        return false
    }

    // toString() 链表数据以字符串形式返回
    toString () {
        let res = ''
        // let cur = this.dummyHead.next
        // while(cur != null) {
        //     res += cur.element + '->'
        //     cur = cur.next
        // }
        for (let cur = this.dummyHead.next; cur != null; cur = cur.next) {
            res += cur.element + '->'
        }
        return res
    }

    // // 往链表尾部追加元素
    // push (element) {
    //     // 创建新节点
    //     const node = new Node(element)
    //     let prev

    //     // 追加新节点
    //     if (this.head == null) {
    //         this.head = node
    //     } else {
    //         prev = this.head
    //         while (prev.next != null ) {
    //             prev = prev.next
    //         }
    //         prev.next = node
    //     }
    //     this.size ++
    // }
}