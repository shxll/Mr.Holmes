
import java.awt.Dimension;
import java.awt.Toolkit;
import javax.swing.JDialog;
import javax.swing.JOptionPane;

public class Notification{
    Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
   
    public int GetWidht(){
        int Value = 0;
        Value = (int) screenSize.getWidth();
        return Value;
    }

    public int GetHight(){
        int Value = 0;
        Value = (int) screenSize.getHeight(); 
        return Value;
    }

    public Notification(){
        int Width,Height ;
        JOptionPane a = new JOptionPane("MR.HOLMES SCAN COMPLETED",JOptionPane.INFORMATION_MESSAGE);
        JDialog d =  a.createDialog(null);
        Width = GetWidht();
        Height = GetHight();
        d.setLocation(Width,Height);
        d.setVisible(true);
        d.setTitle("MR.HOLMES");
        d.setResizable(false);
        d.dispose(); 
    }
    public static void main(String args[]){
        new Notification();
    }
}
