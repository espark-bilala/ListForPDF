<template>
    <div class="sidebar">
    <div><aside class="wrapper">Employe Self sevice
    </aside></div>
    <ul class="list">
        
    <li>
        <router-link to="/">Quick Access</router-link>
        <!-- <a class="active" href="/">My Payslips</a> -->
    </li>
    <li>
        <!-- <a href="/about">My information</a> -->
        <router-link to="/information">My information</router-link> 
        
    </li>

    <li>
        <router-link to="/mypayslips">My Payslips</router-link>
        <!-- <a href="#contact">My Payslips</a> -->
    </li>

    <li>
        <router-link to="/timeentry">Time Entry</router-link>
        <!-- <a href="#about">Time Entry</a> -->
    </li>
    <li>
        <router-link to="/leave">Leave</router-link>
        <!-- <a href="#news">Leave</a> -->
    </li>
    <li>
        <router-link to="/benefits">Benefits</router-link>
        <!-- <a href="#contact">Benefits</a> -->
    </li>
    <li>
        <router-link to="/organizationalchart">Organizational Chart</router-link>
        <!-- <a href="#about">Organizational Chart</a> -->
    </li>
    <li>
        <router-link to="/myteam">My Team</router-link>
        <!-- <a href="#about">My Team</a> -->
    </li>
    </ul>
    
</div>
</template>

<style lang="scss" scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 18rem;
  background-color: #f1f1f1;
//   position: fixed;
  height: 100%;
  overflow: auto;
}
.wrapper{
    background: #001738;
    color: white;
    padding: 1%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
}
.list{
    text-decoration: none;
    list-style-type: none;
    line-height: 40px;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
     color: #001738;
    text-decoration: none;
}
</style>