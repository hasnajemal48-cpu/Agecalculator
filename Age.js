        const bdate = document.getElementById("bd");
        const button = document.getElementById("cb");
        const result =document.getElementById("result");
        cb.onclick = function() {
            if(bd.value === "") { 
         result.textContent = "selectg your birth date";
         return;
            }
        const today = new Date();
        const selectdate = new Date(bd.value);

        let age = today.getFullYear() - selectdate.getFullYear();
        const monthdiference = today.getMonth() - selectdate.getMonth();

        if(monthdiference < 0 || (monthdiference === 0 && today.getDate() < selectdate.getDate() )) {
            age--;
        }
        result.textContent =` you are ${age} years old.`;
        }
