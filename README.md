 # restaurant-web

HTML

onkeypress='return event.charCode >= 48 && event.charCode <= 57'
# ใส่ใน input type text เพื่อให้พิมพ์ได้แค่ตัวเลข

ng-repeat="obj in ตัวแปร array"
# ใส่ในอะไรก็ได้ เพื่อทำการวนลูป

ng-click="function()"
# ใส่ในอะไรก็ได้ เพื่อถ้าคลิ๊กแล้ว จะเข้าไปทำงานใน function นั้นๆใน controller

ng-show="condition == true"
# ใส่ในอะไรก็ได้เพื่อจะเป็น condition ว่า จะให้โชว์ต่อเมื่อ condition ถูกต้อง

ng-disabled="condition == true"
# ใส่ในอะไรก็ได้เพื่อจะเป็น condition ว่า จะให้ disable ต่อเมื่อ condition ถูกต้อง

<input type="text" value="{{variable}}"/>
# คือการแสดงข้อมูลตัวแปร variable จาก controller โดยจะต้องมี {{}}

<label>{{variable}}</label>
# คือการแสดงข้อมูลตัวแปร variable จาก controller โดยจะต้องมี {{}}

<input type="text" maxlength="13"/>
# คือกำหนดให้ input นี้ พิมพ์ได้สูงสุดแค่ 13 ตัวอักษร

<button type="button" class="btn btn-sm btn-danger full-width" ng-click="deleteEmployee(obj.emp_id)">Delete</button>
# ng-click นี้คือ กดแล้วจะไปทำงานที่ function deleteEmployee โดยส่ง emp_id ไปด้วย