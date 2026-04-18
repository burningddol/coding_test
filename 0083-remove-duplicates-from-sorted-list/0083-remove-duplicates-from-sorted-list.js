/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let copied = head;

    let temp = true;

    while(temp){
        if(!copied) break;

        if(copied.val === copied.next?.val) {copied.next = copied.next.next;} else {copied = copied.next;};

        if(!copied) temp =false;
    }
    
   return head;
  
};