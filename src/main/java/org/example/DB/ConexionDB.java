package org.example.DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
public class ConexionDB {
    private static Connection conexion;
    private static Statement statement;
    static {
        try{
            conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/peliculas","root","root123");
            if (conexion != null) {
                System.out.println("Conexión: Conexión a la Base de Datos satisfactoria");
            }
            statement = conexion.createStatement();
        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    public static Connection getConexion(){
        return conexion;
    }
    public  static  Statement getStatement(){
        return statement;
    }
}
