package org.soraworld.autovass;

import org.soraworld.autovass.config.WorkGroup;
import org.soraworld.hocon.node.FileNode;

import java.io.File;

public class AutoVass {

    public static void main(String[] args) {
        if (args != null && args.length == 1) {
            String path = args[0];
            File file = new File(path);
            if (file.exists() && file.isFile()) {
                FileNode fileNode = new FileNode(file);
                fileNode.options().setDebug(true);
                try {
                    fileNode.load();
                    WorkGroup workGroup = new WorkGroup();
                    System.out.println("正在读取项目配置....");
                    fileNode.modify(workGroup);
                    System.out.println("项目配置读取完毕!");
                    System.out.println("正在生成代码....");
                    workGroup.saveOut(file.getParentFile());
                    System.out.println("代码生成完毕!");
                } catch (Exception e) {
                    System.out.println("发生异常!");
                    e.printStackTrace();
                }
            } else {
                System.out.println("目标配置文件不存在或不是文件.");
            }
        } else {
            System.out.println("用法: java -jar AutoVass.jar <配置文件config.conf所在路径>");
        }
    }
}
